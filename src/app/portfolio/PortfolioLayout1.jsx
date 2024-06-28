import React from 'react';
import { Text2Xl, TextSm } from "@/component/commons";

const PortfolioLayout1 = ({ leftHeading, leftTextSm1, leftTextSm2, leftTextSm3, longFormHeading, src1, src2, src3, src4, shortsrc1, shortsrc2, shortsrc3, shortsrc4, shortsrc5, shortFormHeading }) => {
    return (
        <div className="bg-dark mt-24 pb-10 flex flex-col md:flex-row relative">
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
            <div className="md:ml-[30%] md:w-[70%] flex flex-col lg:justify-evenly py-5 px-7 md:pl-16">
                {longFormHeading &&
                    <Text2Xl text={longFormHeading} classes={"text-white mb-3"} />
                }
                {src1 &&
                        <iframe
                            title="vimeo-player"
                            src={src1}
                            className="lg:w-[800px] lg:h-[400px] my-6"
                            allowFullScreen
                        />
                }
                {src2 &&
                        <iframe
                            title="vimeo-player"
                            src={src2}
                            className="lg:w-[800px] lg:h-[400px] my-6"
                            allowFullScreen
                        />
                }
                {src3 &&
                        <iframe
                            title="vimeo-player"
                            src={src3}
                            className="lg:w-[800px] lg:h-[400px] my-6"
                            allowFullScreen
                        />
                }
                {src4 &&
                        <iframe
                            title="vimeo-player"
                            src={src4}
                            className="lg:w-[800px] lg:h-[400px] my-6"
                            allowFullScreen
                        />
                }

                {shortFormHeading &&
                    <Text2Xl text={shortFormHeading} classes={"text-white mb-3"} />
                }

                {shortFormHeading &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {shortsrc1 &&
                            <iframe title="vimeo-player" className='lg:w-[400px] lg:h-[400px] md:w-[220px] md:h-[220px] w-[330px] h-[330px]' src={shortsrc1} allowFullScreen />
                        }
                        {shortsrc2 &&
                            <iframe title="vimeo-player" className='lg:w-[400px] lg:h-[400px] md:w-[220px] md:h-[220px] w-[330px] h-[330px]' src={shortsrc2} allowFullScreen />
                        }
                        {shortsrc3 &&
                            <iframe title="vimeo-player" className='lg:w-[400px] lg:h-[400px] md:w-[220px] md:h-[220px] w-[330px] h-[330px]' src={shortsrc3} allowFullScreen />
                        }
                        {shortsrc4 &&
                            <iframe title="vimeo-player" className='lg:w-[400px] lg:h-[400px] md:w-[220px] md:h-[220px] w-[330px] h-[330px]' src={shortsrc4} allowFullScreen />
                        }
                        {shortsrc5 &&
                            <iframe title="vimeo-player" className='lg:w-[400px] lg:h-[400px] md:w-[220px] md:h-[220px] w-[330px] h-[330px]' src={shortsrc5} allowFullScreen />
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default PortfolioLayout1;
