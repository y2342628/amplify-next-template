"use client";


import useSwr,{mutate} from "swr";
import Loading from "@/components/Loading";
import { categoryFetcher, getTodoFetcher, addTodo ,deleteTodo,doneTodo, updateTodo} from "./fetcher";

import { FormProp,UpdateItem } from "./interface";

import { Button, message, Row,Col,Form } from 'antd';



export default function Page() {
  const {
    data: category,
    error: categoryError,
    isLoading,
  } = useSwr("/api/category", categoryFetcher);
  const { data: todo } = useSwr("/api/todo", getTodoFetcher);





  
  const deleteItem = async (selectedToDoId:string) => {
    const res = await deleteTodo(selectedToDoId);
    if (!res) return;
    message.success("delete success");
    mutate("/api/todo");
  };

  const doneItem = async (selectedToDoId:string) => {
    const res = await doneTodo(selectedToDoId);
    if (!res) return;
    mutate("/api/todo");
  };

  const updateItem =async (data:UpdateItem) => {
    const res = await updateTodo(data);
    if(!res)return
    message.success("update success");
    mutate("/api/todo");
  };



  if (isLoading) return <Loading show={true} />;

  return (
    <div className="py-4">
      <h2 className="text-center">TODO</h2>
      
    </div>
  );
}
