import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "../../../components/ui/dialog";
import { Task } from "./Task";

export const EditTask = () => {
  return (
    <Dialog>

<form>
    <DialogTrigger>
        <Task/>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
            <DialogTitle> Edit Tassk</DialogTitle>
        </DialogHeader>
        <div>
        <div>
            <label htmlFor="task-title">Task Title</label>
            <input type="text" id="task-title" />
        </div>

        <div>
            <label htmlFor="task-description">Task Description</label>
            <textarea id="task-description"></textarea>
        </div>

        <div>
            <label htmlFor="task-type">Task Type</label>
            <select id="task-type">
                <option value="documentation">Documentation</option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
            </select>

            <div>
                <label htmlFor="task-priority">Task Priority</label>
                <select id="task-priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label htmlFor="task-days">Days Ago</label>
                <input type="number" id="task-days" />
            </div>
        </div>
        </div>
    </DialogContent>
</form>
    </Dialog>
  )
}
