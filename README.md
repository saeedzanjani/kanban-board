### Kanban Board Application

### Project Description:

The **Kanban Board** project is a task management tool built with **Angular 17**. It provides users with a dynamic and interactive way to manage tasks using the Kanban methodology. The board is divided into three columns: **To Do**, **Implementing**, and **Done**. Users can create, move, and delete tasks, enhancing their project management experience.

Key features of the Kanban Board include:

- **Task Creation**: A form allows users to add new tasks directly to the "To Do" column.
- **Task Movement**: Users can move tasks between columns either through drag-and-drop functionality or by using directional buttons.
- **Task Deletion**: Tasks can be removed when no longer needed.
- **Responsive Design**: The board is responsive and adapts well to different screen sizes and devices.
- **State Management**: Utilizes **NgRx** for efficient state management, ensuring that task states are consistent across the application.
- **Local Storage**: Tasks are saved in the browser’s LocalStorage, ensuring persistence across sessions.

### Project Architecture:

The project follows a modular architecture pattern, organizing the code into the following key directories:

- **components**: Contains all UI components, including those for individual tasks and columns.
- **directives**: Custom directives to enhance the functionality of the application.
- **layouts**: Handles layout components for structuring the overall application.
- **models**: Defines the data structures used across the app.
- **services**: Provides services for handling business logic and data operations.
- **store**: Manages state using NgRx, handling actions, reducers, and effects.
- **styles**: Centralized styling using SCSS, with variables and mixins for consistent theming.
- **views**: Defines the main views or pages of the application.

### Technologies and Libraries Used:

- **Angular 17**: The core framework used for building the application.
- **Angular Material**: Provides a set of reusable UI components, ensuring a consistent look and feel.
- **NgRx**: Used for state management, ensuring that the state of tasks and other application data is predictable and scalable.
- **SCSS**: Employed for styling, offering better control over design and responsiveness.

### Getting Started:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/kanban-board.git
   cd kanban-board
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the application**:
   ```bash
   npm start
   ```

### Future Improvements:

- **User Authentication**: Add login/logout functionality to secure user tasks.
- **Backend Integration**: Store tasks in a database for multi-user access.
- **Advanced Task Filtering**: Allow users to filter tasks by priority, due date, etc.

### Conclusion:

This **Kanban Board** project demonstrates the use of modern Angular practices, including component-based architecture, state management with NgRx, and responsive UI design with Angular Material and SCSS. The application is robust and scalable, offering a solid foundation for further development and customization.
