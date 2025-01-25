import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);  // declare signal

  // imagePath = computed (() => 'assets/users/'+ this.selectedUser().avatar)


  // otan den xrhsimopoiw shmata kanw to apo katw
  get imagePath() {
    return 'assets/users/'+ this.avatar;
  }

  onSelectUser() {  // ayth h methodos set de douleyei gia InputSignals
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);  // set signal

    this.select.emit(this.id);

  }
  
  // Input χωρις τη χρηση σηματων
  // @Input() avatar!:string;
  // ή αν θελουμε να του πουμε οτι πρεπει τα πεδια να εισαγονται υποχρεωτικά
  @Input({required: true}) id!:string;
  @Input({required : true}) avatar!:string;
  @Input({required : true}) name!:string;
  @Output() select = new EventEmitter();
  // select = output<string>();

  // get imagePath(){
  //   return 'assets/users/' + this.avatar;
  // }

  // Ιnput με τη χρήση σημάτων
  // avatar = input.required<string>();
  // name = input<string>();

  // imagePath = computed ( () => 'assets/users/' + this.avatar())

}
