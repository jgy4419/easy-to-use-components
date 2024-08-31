'use client';
import * as React from 'react';
import Main from "@/app/containeres/main/main";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        func();
    }, []);

    const func = async () => {
        // const res = await fetch('/api/getData');
        // const data = await res.json();
        //
        // console.log(data);
        // alert(data);
        try{
            const response = await fetch("/api/getData");

            if(!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            console.log(data);

            return new Response(JSON.stringify(data), {
                status: 200,
                headers: {
                    "Content-Type": 'application/json'
                }
            });
        }catch(error) {
            const err = error as Error
            console.log(err);
            return new Response(JSON.stringify({error: err.message}), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }


  return (
    <>
      <Main />
    </>   
  );
}