import SideBar from "./Components/Sidebar.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import NewProject from "./Components/NewProject.jsx";
import {useState} from "react";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {

    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    })

    function handleAddTask(text){
        setProjectState((prevState) => {
            const taskId = Math.random();
            const newTask = {
                id: taskId,
                projectId: prevState.selectedProjectId,
                text: text
            };

            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    function handleDeleteTask(id){
        setProjectState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(
                    (task) => task.id !== id
                )
            }
        })
    }

    function handleSelectProject(id){
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id
            }
        })
    }

    function handleStartAddProject(){
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    function handleCancelAddProject(){
        setProjectState( prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        })
    }

    function handleAddProject(projectData){
        setProjectState(prevState => {
            const projectId = Math.random()
            const newProject = {
                ...projectData,
                id: projectId
            }
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleDeleteProject(){
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProjectId
                ),
            }
        })
    }


    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

    let content = <SelectedProject
        project={selectedProject}
        tasks={projectState.tasks}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
    />;

    if(projectState.selectedProjectId === undefined){
        content = <NoProjectSelected onAddProject={handleStartAddProject}/>
    } else if(projectState.selectedProjectId === null) {
        content = <NewProject onCancelNewProject={handleCancelAddProject} onAdd={handleAddProject}/>
    }



  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
          <SideBar
              onAddProject={handleStartAddProject}
              projects={projectState.projects}
              onSelectProject={handleSelectProject}

          />
          {content}
      </main>
    </>
  );
}

export default App;
