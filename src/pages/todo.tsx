import * as React from "react";
import { useParams } from "react-router-dom";

export const TodoPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Todo page #{id}</h1>
    </div>
  );
};
