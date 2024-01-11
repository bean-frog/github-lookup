import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
const Readme = (props) => {
	return(
		  <div className="bg-gray-200 mt-6 p-4 w-fit h-fit">
		  <h1 className="text-xl font-bold m-2">This user has a custom profile README.md:</h1>
		  	<Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{props.md}</Markdown>
		  </div>
		)
}
export default Readme