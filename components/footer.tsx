export default function Footer() {
    return (
        <footer className="py-3 absolute bottom-[0] w-full text-white">
            <div className="max-w-[1280px] sm:px-6 px-3 mx-auto font-bold flex sm:justify-end">
            <p>
          Created <span className="text-[#a800fe]">Ephraim Iyanda</span> All
          rights reserved &copy; {new Date().getFullYear()}
        </p>    
            </div>
        
      </footer>
    );
}