import { MdLocationPin } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router";

function Job({ job }) {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card bg-base-100 shadow-sm ">
            <figure className="flex !justify-start pt-3 pl-5">
                <img
                    src={logo}
                    alt="Shoes"
                    className="w-32 h-auto object-contain " />
            </figure>
            <div className="card-body pt-4">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE] '>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE] '>{job_type}</button>
                </div>
                <div className="mt-4 flex">
                    <h2 className="flex mr-4"><MdLocationPin className="text-2xl mr-2"></MdLocationPin>{location}</h2>
                    <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>Salary: {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary mt-6 ">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Job
