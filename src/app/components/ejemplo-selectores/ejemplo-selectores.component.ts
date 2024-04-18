import { Component, OnInit } from '@angular/core';
import { EjemploSelectoresService } from '../../services/ejemplo-selectores.service';

@Component({
  selector: 'app-ejemplo-selectores',
  templateUrl: './ejemplo-selectores.component.html',
  styleUrl: './ejemplo-selectores.component.css'
})
export class EjemploSelectoresComponent implements OnInit {
  users$ = this.usersStore.users$;
  selectedUser$ = this.usersStore.selectedUser$;

  constructor(private usersStore: EjemploSelectoresService) {}

  ngOnInit() {
    this.usersStore.setUsers([
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ]);
  }

  selectUser(userId: number) {
    this.usersStore.setSelectedUserId(userId);
  }
}
