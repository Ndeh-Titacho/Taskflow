import { useState} from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle,DialogFooter } from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button";

export const Task = () => {

  type TaskType = {
    id: number;
    title: string;
    description: string;
    type: string;
    priority: string;
    days: number;
  }



  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const handleTaskClick = (task: TaskType) => {
    setSelectedTask(task);
    setShowEditDialog(true);
  }

  const handleDialogClose  = (open: boolean) => {
    setShowEditDialog(open);
    //clear the selected task when dialog is closed
    if (!open) {
      setSelectedTask(null);
    }
  }

const Task: TaskType[] = [
    {id: 1, title: "Update team Onboarding guide", description: "Refresh the onboarding process based on recent feedback", type: "documentation", priority: "Low", days: 568},
    {id: 2, title: "fix login authentication bug", description: "Users are experiencing issues with the login timeout", type: "backend", priority: "High", days: 570},
    {id: 3, title: "Redesign user dashboard", description: "Refresh the onboarding process based on recent feedback", type: "frontend", priority: "medium", days: 568},
    {id: 4, title: "Update team Onboarding guide", description: "Refresh the onboarding process based on recent feedback", type: "documentation", priority: "Low", days: 568},

]

  return (
    <div>
        { Task.map((task) => (
         
            <div
            key={task.id}
            onClick={() => handleTaskClick(task)}
             className="bg-white cursor-pointer border border-gray-200 grid grid-cols-1 gap-2 mb-4 p-4 rounded-xl hover:shadow-sm">
                <span className="text-gray-600 font-bold">{task.title}</span>
                <span className="text-gray-500">{task.description}</span>
                <span className="bg-gray-300 w-fit px-2 rounded-xl text-gray-500 text-sm font-medium">{task.type}</span>
                <div className="text-xs text-gray-500 ">
                     <span className="pr-2">{task.priority}</span>
                      <span> {task.days} days ago</span>
                </div>
               

            </div>
        ))}

         <Dialog open={showEditDialog} onOpenChange={handleDialogClose} >

<form className="bg-white">
    <DialogContent className="bg-white rounded-lg shadow-lg p-6  font-semibold ">
        <DialogHeader>
            <DialogTitle> Edit Task</DialogTitle>
        </DialogHeader>
        <div>

          <div className="flex flex-col mb-4">
            <label htmlFor="task-Id">Task ID</label>
            <input type="text" id="task-id" value={selectedTask?.id} className="border border-gray-300 rounded-md p-1 text-gray-500 font-normal " />
          </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="task-title">Task Title</label>
            <input type="text" id="task-title" value={selectedTask?.title} className="border border-gray-300 rounded-md p-1 text-gray-500 font-normal" />
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="task-description">Task Description</label>
            <textarea id="task-description" value={selectedTask?.description} className="border border-gray-300 rounded-md p-1 text-gray-500 font-normal"></textarea>
        </div>

        <div className="flex justify-around mb-4">

          <div>
            <label htmlFor="task-type">Task Type</label>
            <select id="task-type" className="border border-gray-300 rounded-md p-1 text-gray-500 font-normal" value={selectedTask?.type}>
                <option value="documentation">Documentation</option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
            </select>
             </div>

            <div>
                <label htmlFor="task-priority">Task Priority</label>
                <select id="task-priority" value={selectedTask?.priority} className="border border-gray-300 rounded-md p-1 text-gray-500 font-normal">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label htmlFor="task-days">Days Ago</label>
                <input type="number" id="task-days" value={selectedTask?.days} className="border border-gray-300 rounded-md p-1 text-gray-500 font-normal" />
            </div>
        </div>
        </div>

        <div>
          <DialogFooter>
        <Button type="submit" className="bg-blue-500 text-white">Save Changes</Button>
        <Button variant="outline" className="border border-gray-300 text-gray-500" onClick={() => handleDialogClose}>Cancel</Button>
    </DialogFooter>
        </div>
    </DialogContent>

    
</form>
    </Dialog>
    </div>
  )
}
