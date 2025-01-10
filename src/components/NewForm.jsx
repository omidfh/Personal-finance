import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import { createUserTransaction } from "../api/UserTransacionsApi";
import Loader from "./Loader";

// Styled components
const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function NewForm() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createUserTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      toast.success("New Transaction Was Created");
      reset();
    },
    onError: (error) => toast.error(error.message),
  });

  function onSubmit(data) {
    data.user_id = "0ecfffbe-c8dc-4948-bf9f-771bfa933936";
    console.log(data);
    mutate(data);
  }

  if (isCreating) return <Loader />;
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="title">Title:</Label>
        <Input type="text" id="title" {...register("title")} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="amount">Amount:</Label>
        <Input type="number" id="amount" {...register("amount")} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="priority">Priority:</Label>
        <Select id="priority" {...register("priority")}>
          <option value="Necessary">Necessary</option>
          <option value="Optional">Optional</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Description:</Label>
        <TextArea id="description" {...register("description")}></TextArea>
      </FormGroup>
      <Button type="submit" disabled={isCreating}>
        Submit
      </Button>
    </StyledForm>
  );
}

export default NewForm;
