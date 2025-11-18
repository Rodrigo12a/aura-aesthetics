import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservar-cita',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservar-cita.component.html',
  styleUrl: './reservar-cita.component.css'
})

export class ReservarCitaComponent  implements OnInit {
  @Input() locale: string = 'es-ES';
@Output() citaConfirmada = new EventEmitter<any>();


today = new Date();
currentMonth!: number;
currentYear!: number;
weeks: Date[][] = [];
weekdays: string[] = [];
selectedDate: Date | null = null;


/* Datos de ejemplo (podrán venir de API) */
servicios = [
{ id: 1, nombre: 'Corte de Cabello' },
{ id: 2, nombre: 'Tinte / Coloración' },
{ id: 3, nombre: 'Peinado Profesional' },
{ id: 4, nombre: 'Uñas / Manicura' }
];


estilistas = [
{ id: 1, nombre: 'Brenda López' },
{ id: 2, nombre: 'Marisol Hernández' },
{ id: 3, nombre: 'Carlos Rivera' }
];
metodosPago = ['Efectivo', 'Tarjeta', 'Transferencia', 'Pago al llegar'];


citaForm!: FormGroup;


constructor(private fb: FormBuilder) {}


ngOnInit(): void {
const now = new Date();
this.currentMonth = now.getMonth();
this.currentYear = now.getFullYear();
this.weekdays = this.getWeekdays();
this.generateCalendar();


this.citaForm = this.fb.group({
servicio: ['', Validators.required],
estilista: ['', Validators.required],
nombre: ['', Validators.required],
email: ['', [Validators.required, Validators.email]],
metodoPago: ['', Validators.required]
});
}


getWeekdays(): string[] {
const arr: string[] = [];
for (let i = 1; i <= 7; i++) {
const d = new Date(2024, 0, i);
arr.push(d.toLocaleDateString(this.locale, { weekday: 'short' }));
}
return arr;
}
generateCalendar() {
this.weeks = [];
const firstDay = new Date(this.currentYear, this.currentMonth, 1);
const startOffset = (firstDay.getDay() + 6) % 7;
let current = new Date(this.currentYear, this.currentMonth, 1 - startOffset);


for (let w = 0; w < 6; w++) {
const week: Date[] = [];
for (let i = 0; i < 7; i++) {
week.push(new Date(current));
current.setDate(current.getDate() + 1);
}
this.weeks.push(week);
}
}
prevMonth() {
if (this.currentMonth === 0) {
this.currentMonth = 11;
this.currentYear--;
} else this.currentMonth--;
this.generateCalendar();
}


nextMonth() {
if (this.currentMonth === 11) {
this.currentMonth = 0;
this.currentYear++;
} else this.currentMonth++;
this.generateCalendar();
}


selectDate(date: Date) {
if (date < new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate())) return;
this.selectedDate = date;
}


isToday(date: Date) {
return date.toDateString() === this.today.toDateString();
}


sameMonth(date: Date) {
return date.getMonth() === this.currentMonth;
}


getLabel() {
return new Date(this.currentYear, this.currentMonth, 1).toLocaleDateString(this.locale, {
month: 'long',
year: 'numeric'
});
}
confirmarCita() {
if (!this.selectedDate) return;
if (this.citaForm.invalid) return;


const data = {
fecha: this.selectedDate,
...this.citaForm.value
};


this.citaConfirmada.emit(data);
}

}
