# Student Management – Angular Application

## Overview

This project is a simple **Student Management** application built with **Angular**.

- The **Home page** shows a list of students and their details.  
- A **side menu** provides navigation to **view students** and **add a new student**.  
- The **Add Student** page uses **Reactive Forms** with validation and dynamic UI behavior.

---

## Features

### 1. Home Page (Student List)

The default **Home** page displays all saved students with the following details:

- **Name**
- **Class**
- **Gender**
- **Hobby** (or `No hobby` if not provided)
- **Favorite Subject**

At least **two students** are pre-saved and displayed when the app starts.

---

### 2. Add Student Page (Reactive Form)

The **Add Student** screen is a **Reactive Form** with the following fields:

1. **Name**  
   - Type: Text input  
   - **Required**  
   - Minimum length: **5 characters**

2. **Class**  
   - Type: Dropdown  
   - Options: `Class 6`, `Class 7`, `Class 8`, `Class 9`  
   - **Required**

3. **Gender**  
   - Type: Radio buttons  
   - Options: `Male`, `Female`  
   - **Required**

4. **Has Hobby**  
   - Type: Checkbox  
   - Label: `I have a hobby`  
   - Default: **Unchecked (No)**

5. **Hobby**  
   - Type: Text input  
   - **Visible only when** `Has Hobby` is checked (using `*ngIf`)

6. **Favourite Subject**  
   - Type: Dropdown  
   - Single selection (no multi-select)  
   - **Optional**

---

### 3. Dynamic Messages (Using `*ngIf`)

The app shows different messages next to **Class** based on the selected value:

- If **Class 9** is selected:  
  > You will appear in board exams soon. All the Best !!

- If **Class 6** is selected:  
  > Welcome to middle school!

- For **Class 7** or **Class 8**:  
  > Education and hobby go hand in hand!

These messages are displayed conditionally using `*ngIf`.

---

### 4. Add Student to List & Redirect

- When the user clicks **Save** on the Add Student form:  
  - The new student is **added to the students list**.  
  - The user is **redirected back to the Home page**, where all students (including the newly added one) are displayed.

---

## Tech Stack

- **Framework**: Angular  
- **Language**: TypeScript  
- **UI**: HTML, CSS  
- **Forms**: Reactive Forms (`FormBuilder`, `FormGroup`, `Validators`)

---

## Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)  
- **Angular CLI** installed globally:

```bash
npm install -g @angular/cli
