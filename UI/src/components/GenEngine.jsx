/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Select, Input, Button } from 'antd';
import {useWeb3Contract} from "react-moralis";


const { Option } = Select;

const DInterestAbi = require("../artifacts/DInterest.json")


const poolInfo = [
  {
    "address": "0x0e99145166e2982bb67054a1e5d3a902fc4d2b59",
    "token": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    "tokenSymbol": "WBTC",
    "protocol": "Aave",
  },
  {
    "address": "0x3933baac41f04d0ffa0977b0e879bc56482ad667",
    "token": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    "tokenSymbol": "USDC",
    "protocol": "Aave",
    
  },
  {
    "address": "0x3b79eb9675ed29554f57b719dc66a461a4c84970",
    "token": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    "tokenSymbol": "WETH",
    "protocol": "Aave",
    
  },
  {
    "address": "0x4f28fc2be45682d1be1d0f155f4a52d4509db629",
    "token": "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    "tokenSymbol": "WMATIC",
    "protocol": "Aave",
    
  },
  {
    "address": "0xa78276c04d8d807feb8271fe123c1f94c08a414d",
    "token": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    "tokenSymbol": "DAI",
    "protocol": "Aave",
    
  },
  {
    "address": "0xf5ef24a27f35cbe8a2b0a954acf81d7064ce6b70",
    "token": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "tokenSymbol": "USDT",
    "protocol": "Aave",
    
  }
];

export default function GenEngine() {

  const [Pool, setPool] = useState("");
  const [Amount, setAmount] = useState("")
  const [Time, setTime] = useState("")


  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: DInterestAbi.abi,
      contractAddress: Pool,
      functionName: "deposit",
      params: {Amount , },
    }); 

  function handleChange(gg) {
    console.log(gg);
    setPool(gg.value);
  }

  const type = (ty) => {
    console.log(ty.target.value);
    setAmount(ty.target.value)
  }


  const testbtn = () => {
    console.log(Amount + " " + Pool + " " + Time);


  };


  const time = (im) => {
    console.log(im.target.value)

    let ms = Date.now();
    console.log(Math.trunc(ms/1000));
    console.log(Math.trunc(ms / 1000) + im.target.value * 86400);

    var gg = Math.trunc(ms / 1000) + (im.target.value * 86400);
    setTime(gg);
    console.log(Time)
    
  }
  return (
    <>
      <Input placeholder="Amount" style={{ width: 150 }} onChange={type} />
      <Input placeholder="Time in days" style={{ width: 150 }} onChange={time} />
      <Select
        labelInValue
        defaultValue={poolInfo[0].address}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value={poolInfo[0].address}>{poolInfo[0].tokenSymbol}</Option>
        <Option value={poolInfo[1].address}>{poolInfo[1].tokenSymbol}</Option>
        <Option value={poolInfo[2].address}>{poolInfo[2].tokenSymbol}</Option>
        <Option value={poolInfo[3].address}>{poolInfo[3].tokenSymbol}</Option>
        <Option value={poolInfo[4].address}>{poolInfo[4].tokenSymbol}</Option>
        <Option value={poolInfo[5].address}>{poolInfo[5].tokenSymbol}</Option>
      </Select>

      {/* <button onClick={console.log("haha")}>Let's Mint some</button> */}

      <Button onClick={testbtn}>testing buttons</Button>
    </>
  );
}
