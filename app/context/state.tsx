"use client";
import { useState, useEffect, createContext, useCallback } from "react";

declare let window: any;

export const StateContext = createContext({
  talkIsOpen: false,
  setTalkIsOpen: (value: boolean) => {},

  testimonialBoxIsOpen: false,
  setTestimonialBoxIsOpen: (value: boolean) => {},

  refreshTestimonials: false,
  setRefreshTestimonials: (value: boolean) => {},
});

type Props = {
  children?: React.ReactNode;
};

export const StateProvider = ({ children }: Props) => {
  const [talkIsOpen, setTalkIsOpen] = useState(false);
  const [testimonialBoxIsOpen, setTestimonialBoxIsOpen] = useState(false);
  const [refreshTestimonials, setRefreshTestimonials] = useState(false);

  return (
    <StateContext.Provider
      value={{
        talkIsOpen,
        setTalkIsOpen,
        testimonialBoxIsOpen,
        setTestimonialBoxIsOpen,
        refreshTestimonials,
        setRefreshTestimonials,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
