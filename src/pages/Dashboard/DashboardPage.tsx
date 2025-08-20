import {LayoutGrid, Menu } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Task } from "./Components/Task";
import { useState } from "react";

export const DashboardPage = () => {
const [activeFilter, setActiveFilter] = useState<boolean>(false)

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className=" bg-card border-gray-500 text-card-foreground rounded-2xl px-4 py-6 shadow-sm text-sm">
                <div className="flex justify-between  "> 
                    <span className="text-stone-900 font-semibold">Total Tasks</span>
                    <span> <LayoutGrid/> </span>
                </div>
                <div className="font-bold text-2xl">4</div>
                <div className="text-gray-600">3 active, 1 completed</div>
            </div>

             <div className="bg-card border-gray-500 text-card-foreground rounded-2xl px-4 py-6 shadow-sm text-sm">
                <div className="flex justify-between  "> 
                    <span className="text-stone-900 font-semibold">Due Today</span>
                    <span className="bg-gray-300 rounded-full w-8 h-8 grid place-items-center"> 0 </span>
                </div>
                <div className="font-bold text-2xl">0</div>
                <div className="text-gray-600">Task due today</div>
            </div>
           
           
             <div className="bg-card border-gray-500 text-card-foreground rounded-2xl px-4 py-6 shadow-sm text-sm">
                <div className="flex justify-between  "> 
                    <span className="text-stone-900 font-semibold">Overdue</span>
                    <span className="bg-red-500 rounded-full w-8 h-8 grid place-items-center text-white"> 3 </span>
                </div>
                <div className="font-bold text-2xl text-red-500">3</div>
                <div className="text-gray-600">Tasks past due date</div>
            </div>

            <div className="bg-card border-gray-500 text-card-foreground rounded-2xl px-4 py-6 shadow-sm text-sm">
                <div className="flex justify-between  "> 
                    <span className="text-stone-900 font-semibold">Completed</span>
                    <span className="bg-green-200 text-green-700 rounded-full  w-12 h-8 grid place-items-center"> 25% </span>
                </div>
                <div className="font-bold text-2xl text-green-600">0</div>
                <div className="text-gray-600">Task due today</div>
            </div>
        </div>


        <div className="mt-10  flex justify-between p-4">
<div>
    <h1 className="font-bold">My Task</h1>
    <span className="text-gray-600">Manage your task and projects</span>
</div>
<div className="border flex justify-between gap-20">
    <div className="flex border justify-between h-fit mt-2">
<Menu className=" rounded-md bg-blue-600 text-white p-1" size={25} />
<LayoutGrid className="border rounded-md p-1" size={25}/>
    </div>
    <div>
<Button>Due Date</Button>
    </div>
</div>
        </div>

{/* Task listings */}
        <div>
            <Task/>
        </div>
        
        </>
    )
}