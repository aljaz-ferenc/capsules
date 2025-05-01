export default function Houses() {
    return (
        <section>
            <h2 className='text-[85.5px] leading-22'>Choose the one you like best</h2>
            <div className='flex justify-around'>
                <p className='flex-1'>You can choose one of three premium capsule houses in our offer. Each of our capsules provides the
                    highest quality and meets the standards adjusted to your needs. Choose the one you like.</p>
                <div className='flex flex-wrap flex-1 gap-1'>
                    <span className='border-2 border-white rounded-full p-2 text-2xl'>Sustainable</span>
                    <span className='border-2 border-white rounded-full p-2 text-2xl'>Nature-care</span>
                    <span className='border-2 border-white rounded-full p-2 text-2xl'>Smart</span>
                    <span className='border-2 border-white rounded-full p-2 text-2xl'>Privacy</span>
                    <span className='border-2 border-white rounded-full p-2 text-2xl'>Spacious</span>
                    <span className='border-2 border-white rounded-full p-2 text-2xl'>Glassed-in</span>
                </div>
            </div>
        </section>
    )
}