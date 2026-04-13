import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    { id: 1, name: 'Project One', description: 'Description for project one', tags: ['React', 'CSS'] },
    { id: 2, name: 'Project Two', description: 'Description for project two', tags: ['Next.js', 'Node.js'] },
    { id: 3, name: 'Project Three', description: 'Description for project three', tags: ['JavaScript', 'HTML'] },
];

const PortfolioPage = () => {
    const [filter, setFilter] = React.useState('');
    const filteredProjects = projects.filter(project =>
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
    );

    return (
        <div>
            <h1>Portfolio</h1>
            <input 
                type="text" 
                placeholder="Filter by tag" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
            />
            <div className="project-cards">
                {filteredProjects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        name={project.name} 
                        description={project.description} 
                        tags={project.tags} 
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;