"use client";
import React from "react";
import { useState } from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";

function Partner() {
    const def = [
        "BINANCE",
        "CHAINLINK",
        "FILECOIN",
        "POLYGON",
        "SHARDEUM",
        "SOLANA",
        "TOPL",
    ];
    const [imgs, setImgs] = useState([
        "BINANCE",
        "CHAINLINK",
        "FILECOIN",
        "POLYGON",
        "SHARDEUM",
        "SOLANA",
        "TOPL",
    ]);

    return (
        <div className="px-8 py-8 relative top-[4rem] min-h-[40vh] flex flex-col ticker-wrapper">
            <h1 className="text-center font-tektur text-3xl md:text-4xl font-bold">
                Our Partners
            </h1>

            <p className="text-center font-tektur text-xs md:text-xs mt-4">
                We contributed to building a revolutionary ecosystem for some of
                the leading
            </p>

            {/* now the scroll  */}
            <div className="mt-10">
                <Ticker duration={15}>
                    {imgs.map((item, index) => (
                        <Image
                            key={index}
                            className="mx-6 w-[72px] h-[80px] md:w-[144px] md:h-[160px] "
                            width={144}
                            height={160}
                            src={`/partners/${item}.png`}
                            onMouseOver={() => {
                                // console.log("hi");

                                const tmp = Array.from(imgs);
                                if (tmp[index] !== def[index]) {
                                    tmp[index] = def[index];
                                } else {
                                    tmp[index] = `${item}2`;
                                }
                                setImgs(tmp);
                            }}
                            onMouseOut={() => {
                                // console.log("byee");

                                const tmp = Array.from(imgs);
                                tmp[index] = item;
                                setImgs(tmp);
                            }}
                            alt={item}
                        />
                        // <div
                        //     key={index}
                        //     style={{
                        //         backgroundColor: item,
                        //         margin: "5px",
                        //         height: "250px",
                        //         width: "200px",
                        //     }}
                        // />
                    ))}
                </Ticker>
            </div>

            <div></div>
        </div>
    );
}

export default Partner;
