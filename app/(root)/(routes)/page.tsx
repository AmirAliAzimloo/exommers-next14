"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect, useState } from "react";
 

const SetupPage = () => {

  const onOpen = useStoreModal(state => state.onOpen);
  const isOpen = useStoreModal(state=>state.isOpen); 

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    };
  },[isOpen])

    return null;
}

export default SetupPage;
