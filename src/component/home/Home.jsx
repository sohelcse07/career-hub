import React from 'react'
import Banner from '../../banner/Banner'
import CategoryList from '../../component/categoryList/CategoryList'
import FeaturedJobs from '../../component/featuredJobs/FeaturedJobs'

function Home() {
    return (
        <div>
            <Banner />
            <CategoryList />
            <FeaturedJobs />
            
        </div>
    )
}

export default Home
