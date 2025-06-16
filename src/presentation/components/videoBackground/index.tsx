"use client";
const VIDEO_BACKGROUND = "/videobackground.mp4";

export const VideoBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src={
                    "https://pikaso.cdnpk.net/private/production/1997053563/e34c30a6-787c-405b-b1a6-1ca8ebffc46b-0.mp4?token=exp=1762992000~hmac=3b5a0047e20f2491a3dac524f46d1103ab8dca7692fdd530cf9acb1f0e7daba2"
                }
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    );
};
