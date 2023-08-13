const FirstScreen = () => {
    return (
        <section className="flex min-h-screen justify-center items-center bg-[url(/images/bg-fscreen.png)] bg-cover bg-center">
            <div>
                <img className="h-[450px] aspect-square" src="/images/portal-left.png" alt="" />
            </div>
            <div>
                <img className="h-[450px] aspect-square" src="/images/portal-rigth.png" alt="" />
            </div>
        </section>
    )
}

export default FirstScreen