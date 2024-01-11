import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Userdata = (props) => {
	console.log(props);
	const reposUrl = props.htmlUrl + "?tab=repositories"
	const followersUrl = props.htmlUrl + "?tab=followers"
	const followingUrl = props.htmlUrl + "?tab=following"
	return (
		<div className="flex flex-col w-full h-fit bg-gray-200 rounded-md p-4">


		<div className="flex flex-row items-center">
		<a target="_blank" href={props.htmlUrl}>
			<img className="w-32 h-32 rounded-full" src={props.avatarUrl}></img>
			</a>
			<div className="flex flex-col">
			<a target="_blank" href={props.htmlUrl} className="text-4xl m-4 mt-2 mb-auto text-black">{props.displayName}</a>
			<h1 className="text-xl ml-4 text-gray-400">{props.username}</h1>
			   {props.hireable? (
       	 			<p className="ml-4 text-emerald-500">Available for hire</p>
      			) : (
        			<p></p>
     			 )}
			</div>
		</div>
		

		<div className="flex flex-row mt-2">
			
		<a target="_blank" href={reposUrl} className="text-xl flex flex-row items-center h-fit w-fit px-2 py-1 m-2 bg-gray-200 shadow-md rounded-md ">
			<FontAwesomeIcon icon={faBook} />
			<h1 className="px-2">{props.numPublicRepos}</h1>
		</a>
		<a target="_blank" href={followersUrl} className="text-xl flex flex-row items-center h-fit w-fit px-2 py-1 m-2 bg-gray-200 shadow-md rounded-md ">
			<FontAwesomeIcon icon={faUsers} />
			<h1 className="px-2">{props.followers}</h1>
		</a>
		<a target="_blank" href={followingUrl} className="text-xl flex flex-row items-center h-fit w-fit px-2 py-1 m-2 bg-gray-200 shadow-md rounded-md ">
			<FontAwesomeIcon icon={faUserPlus} />
			<h1 className="px-2">{props.following}</h1>
		</a>
		
		</div>
		<h1 className="text-md text-black mt-2 mb-auto">Account created {props.createdAt}</h1>



		</div>
		
	)
}
export default Userdata