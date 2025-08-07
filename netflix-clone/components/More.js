

export default function More({head, para}) {

    return(
        <>
        
        <div className="flex flex-col justify-center items-center gap-15 w-72 rounded-2xl h-80 bg-slate-800 p-3">
            <p className="font-bold text-white text-2xl">{head}</p>
            <p className="text-white opacity-70">{para}</p>
        </div>
        
        </>
    );
}