import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as styles from "./dialog.css";
import { Button } from "../button";

export const DemoDialog: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты. Предложения от всех деревни собрал, сбить маленькая
          даже текста вопрос безорфографичный.
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
