"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ConfirmDialog(props: any) {
  return (
    <Dialog defaultOpen={props.open}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        <div className="text-center px-20">
          {props.message}
        </div>
        <DialogFooter>
          <Button variant={'secondary'} onClick={props.handleCancel}>Cancelar</Button>
          <Button onClick={props.handleConfirm}>Borrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
