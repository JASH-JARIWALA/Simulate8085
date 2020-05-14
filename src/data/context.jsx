import React, { useState, createContext, useRef } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [RegisterData, setRegisterData] = useState([
    {
      id: 0,
      name: "Accumulator",
      value: "0",
      isEdit: false,
      acronym: "ACC",
    },
    {
      id: 1,
      name: "W Register",
      value: 0,
      isEdit: false,
      acronym: "W",
    },
    {
      id: 2,
      name: "Z Register",
      value: 0,
      isEdit: false,
      acronym: "Z",
    },
    {
      id: 3,
      name: "B Register",
      value: 0,
      isEdit: false,
      acronym: "B",
    },
    {
      id: 4,
      name: "C Register",
      value: 0,
      isEdit: false,
      acronym: "C",
    },
    {
      id: 5,
      name: "D Register",
      value: 0,
      isEdit: false,
      acronym: "D",
    },
    {
      id: 6,
      name: "E Register",
      value: 0,
      isEdit: false,
      acronym: "E",
    },
    {
      id: 7,
      name: "H Register",
      value: 0,
      isEdit: false,
      acronym: "H",
    },
    {
      id: 8,
      name: "L Register",
      value: 0,
      isEdit: false,
      acronym: "L",
    },
  ]);

  const InstructionDetails = useState([
    {
      id: 0,
      name: "ADD",
      clock: 4,
      cycle: 1,
      group: "Arithmetic",
    },
    {
      id: 1,
      name: "ACC",
      clock: 7,
      group: "Arithmetic",
    },
    {
      id: 2,
      name: "MOV",
      clock: 4,
      cycle: 1,
      group: "Data Transfer",
    },
  ]);
  const [flags, setFlags] = useState([
    {
      id: 0,
      name: "Sign Flag",
      symbol: "S",
      value: 0,
    },
    {
      id: 1,
      name: "Zero Flag",
      symbol: "Z",
      value: 0,
    },
    {
      id: 2,
      name: "Auxilary Carry",
      symbol: "AC",
      value: 0,
    },
    {
      id: 3,
      name: "Parity Flag",
      symbol: "P",
      value: 0,
    },
    {
      id: 4,
      name: "Carry Flag",
      symbol: "C",
      value: "0",
    },
  ]);
  const [block, setBlock] = useState([
    {
      id: 0,
      name: "Databus",
      opacity: 1,
      value: 0,
    },
    {
      id: 1,
      name: "Accumulator",
      opacity: 1,
      value: 0,
    },
    {
      id: 2,
      name: "Temp",
      opacity: 1,
      value: 0,
    },
    {
      id: 3,
      name: "Instruction",
      opacity: 1,
      value: 0,
    },
    {
      id: 4,
      name: "AccLatch",
      opacity: 1,
      value: 0,
    },
    {
      id: 5,
      name: "FlipFlop",
      opacity: 1,
      value: 0,
    },
    {
      id: 6,
      name: "decoder",
      opacity: 1,
      value: "",
    },
    {
      id: 7,
      name: "ALU",
      opacity: 1,
      value: 0,
    },
    {
      id: 8,
      name: "decimal",
      opacity: 1,
      value: 0,
    },
    {
      id: 9,
      name: "control",
      opacity: 1,
      value: 0,
    },
    {
      id: 10,
      name: "buffer",
      opacity: 1,
      value: 0,
    },
  ]);
  const opcodeMap = [
    { val: "A", code: 87 },
    { val: "B", code: 80 },
    { val: "C", code: 81 },
    { val: "D", code: 82 },
    { val: "E", code: 83 },
    { val: "H", code: 84 },
    { val: "L", code: 85 },
    { val: "M", code: 86 },
  ];

  const blockMap = {
    AD0_AD7: 0,
    Instruction_register: 3,
    Instruction_decoder: 6,
    A8_A15: 10,
    ProgramCounter: 11,
    B: 3,
  };

  const [isInstructionValid, setIsInstructionValid] = useState(false);
  const [InstructionArray, setInstructionArray] = useState();
  const [tempReg, setTempReg] = useState(0);
  const [rawInstruction, setRawInstruction] = useState(null);
  const [addressRange, setAddressRange] = useState([]);
  const SVGRef = useRef(null);
  const [virtualRam, setVirtualRam] = useState([]);
  const [pc, setPc] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(0.5);

  return (
    <Context.Provider
      value={{
        RegisterData,
        setRegisterData,
        rawInstruction,
        setRawInstruction,
        addressRange,
        setAddressRange,
        SVGRef,
        InstructionDetails,
        InstructionArray,
        setInstructionArray,
        flags,
        setFlags,
        tempReg,
        setTempReg,
        isInstructionValid,
        setIsInstructionValid,
        block,
        setBlock,
        virtualRam,
        setVirtualRam,
        pc,
        setPc,
        animationSpeed,
        setAnimationSpeed,
        opcodeMap,
        blockMap,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
