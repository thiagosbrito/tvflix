import BackgroundVideo from 'next-video/background-video';
export function Featured() {
    const poster = '/images/movie_cover.jpg'
    return (
        <div className="w-full min-h-[750px] relative bg-yellow-200">
            {/* <BackgroundVideo
                className="object-cover w-full h-full"
                poster='/images/movie_cover.jpg' 
                blurDataURL='/images/movie_cover.jpg'
                playbackId='rtrEZOz02W4EKsUrETIUyhhUbv9Q01DAoryEuNIwT6IZw'
            >
            </BackgroundVideo> */}
            {/* <div className="h-full w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div> */}
        </div>
    );
}