const Projects=()=>(
<section className="container p-10 bg-grep-100 text-center" id='projects'>
    <div className="box">
        <h2 className="text-3xl font-bold mb-4">
            Projects
        </h2>
    <div className="grid gap-4 sm:grid-cols-2">
        {/* project1 */}
        <div className="p-4 bg-white shodow rounded">
            <h3 className="font-semibold">project-1</h3>
            <p>Ecommerce Filpkart does online shoping & delivery of product</p>
        </div>
        {/* project2 */}
        <div className="p-4 bg-white shodow rounded">
            <h3 className="font-semibold">project-2</h3>
            <p>Library does online issueing and reading books</p>
        </div>
        {/* project3 */}
         <div className="p-4 bg-white shodow rounded">
            <h3 className="font-semibold">project-3</h3>
            <p>Petstore does online adopt or donate pets</p>
        </div>


    </div>
    </div>
</section>

)
export default Projects;