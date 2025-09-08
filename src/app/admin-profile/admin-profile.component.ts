import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent {
  admin = {
    profilePic: 'https://i.pravatar.cc/150?img=3', // default avatar
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+91 9876543210',
  };

  showForm = false;

  editAdmin() {
    this.showForm = true;
  }

  saveAdmin() {
    this.showForm = false;
  }

  deleteAdmin() {
    this.admin = {
      profilePic: '',
      name: 'Add User',
      email: 'N/A',
      phone: 'N/A',
    };
  }

  // ✅ Handle file upload
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.admin.profilePic = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
