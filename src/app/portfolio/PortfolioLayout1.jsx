import React from 'react';
import { Text2Xl, TextSm } from "@/component/commons";

const PortfolioLayout1 = ({ leftHeading, leftTextSm1, leftTextSm2, leftTextSm3, longFormHeading, src1, src2, src3, src4, src5, shortsrc1, shortsrc2, shortsrc3, shortsrc4, shortsrc5, shortFormHeading }) => {
    return (
        <div className="bg-dark mt-24 min-h-screen flex flex-col md:flex-row relative">
            <div className="md:fixed md:w-[30%] w-full p-9">
                {leftHeading &&
                    <Text2Xl text={leftHeading} classes={"text-white mb-4"} />
                }
                {leftTextSm1 &&
                    <TextSm text={leftTextSm1} classes={"text-grey mb-4"} />
                }
                {leftTextSm2 &&
                    <TextSm text={leftTextSm2} classes={"text-grey mb-4"} />
                }
                {leftTextSm3 &&
                    <TextSm text={leftTextSm3} classes={"text-grey mb-4"} />
                }
            </div>
            <div className="md:ml-[30%] md:w-[70%] flex flex-col md:justify-evenly py-5 px-7 md:pl-16">
                {longFormHeading &&
                    <Text2Xl text={longFormHeading} classes={"text-white mb-3"} />
                }
                {src1 &&
                    <div className="md:w-5/6 w-full h-[350px] md:mb-5">
                        <iframe
                            title="vimeo-player"
                            src={src1}
                            className="w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                }
                {/* Add src2, src3, src4, src5 in the same way */}
                
                {shortFormHeading &&
                    <Text2Xl text={shortFormHeading} classes={"text-white mb-3"} />
                }

                {shortFormHeading &&
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {shortsrc1 &&
                            // <div className="">
                                <iframe
                                    title="vimeo-player"
                                    src={shortsrc1}
                                    className="w-[200px] border border-white"
                                    allowFullScreen
                                />
                            // </div>
                        }
                        {shortsrc2 &&
                            // <div className="">
                                <iframe
                                    title="vimeo-player"
                                    src={shortsrc2}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            // </div>
                        }
                        {shortsrc3 &&
                            <div className="border border-white">
                                <iframe
                                    title="vimeo-player"
                                    src={shortsrc3}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                    width={100}
                                />
                            </div>
                        }
                        {shortsrc4 &&
                            <div className="">
                                <iframe
                                    title="vimeo-player"
                                    src={shortsrc4}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                        }
                        {shortsrc5 &&
                            <div className="">
                                <iframe
                                    title="vimeo-player"
                                    src={shortsrc5}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default PortfolioLayout1;
