import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

interface MenuItems {
  label : string;
  path: string;
}

@Component({
  imports: [MatSidenavModule, MatListModule, RouterLink],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})

export class Sidebar {
  role: 'PATIENT' | 'DOCTOR' | 'ADMIN' = 'DOCTOR';

  patientMenu: MenuItems [] = [
    {label: 'Dashboard', path: ''},
    {label: 'Appointments', path: ''},
    {label: 'Medical Records', path: ''},
    {label: 'Prescriptions', path: ''},
    {label: 'Lab Reports', path: ''},
    {label: 'Notifications', path: ''},
    {label: 'Profile', path: ''},
  ];

  doctorMenu: MenuItems [] = [
    {label: 'Dashboard', path: ''},
    {label: 'Appointments', path: ''},
    {label: 'Medical Records', path: ''},
    {label: 'Patients', path: ''},
    {label: 'Prescriptions', path: ''},
    {label: 'Availability and Schedule', path: ''},
    {label: 'Notifications', path: ''},
    {label: 'Profile', path: ''},
  ];

  adminMenu: MenuItems [] = [
    {label: 'Dashboard and Reports', path: ''},
    {label: 'Patient Management', path: ''},
    {label: 'Doctor Management', path: ''},
    {label: 'Appointment Management', path: ''},
    {label: 'User and Role Management', path: ''},
    {label: 'System Settings', path: ''},
  ];

  get menuItems() : MenuItems[] {
    switch (this.role) {
    case 'ADMIN': 
      return this.adminMenu;
    case 'DOCTOR': 
      return this.doctorMenu;
    default: 
      return this.patientMenu;
  }
  }
}
