"use client";

import { ProverbInterface } from "@/interface";
import { getTitleName } from "@/utils";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function ProverbName({
  titleName,
  proverb,
}: {
  titleName?: string;
  proverb: ProverbInterface;
}) {
  const { onOpen, onClose, onOpenChange, isOpen } = useDisclosure();

  if (proverb === undefined) return null;
  const { titleName: titleNameProverb } = getTitleName(proverb.TitleId);

  function copyText() {
    const text = `
      ${proverb.ProverbName}
      (စကားပုံ)
      ${proverb.ProverbDesp}
    `;
    onClose();
    navigator.clipboard.writeText(text);
  }

  return (
    <div>
      <div
        className="bg-[#B0D9B1] m-1 w-fit px-2 py-1 rounded-md hover:cursor-pointer hover:bg-[#91a893] hover:text-white"
        onClick={onOpen}
      >
        {proverb.ProverbName}
      </div>

      <Modal
        placement="center"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-[#B0D9B1] text-[#618264]">
          <ModalHeader className="bg-[#79AC78] text-white font-bold">
            {titleName ?? titleNameProverb}(စကားပုံ)
          </ModalHeader>

          <ModalBody>
            <div>
              <div className="md:py-1 font-semibold">{proverb.ProverbName}</div>
              <div>{proverb.ProverbDesp}</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className="bg-[#618264] text-white" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-[#618264] text-white" onClick={copyText}>
              Copy and Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
