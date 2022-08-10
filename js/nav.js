export class Nav {
    constructor(views){
        this.links = [...document.getElementsByClassName('vclink')];
        this.views = views;
    }

    initiate(){
        this.addIndicesToLinks();
        this.addEventsToLinks();
        this.addHashChangeListener();
    }

    addIndicesToLinks = () => {
        this.links.forEach((link, index) => {
            link.dataset.index = index;
        })
    }
    
    // Change Browser Navigation Hash
    changeHash = (index) => {
        let newHash = this.views.extractViewName(this.views.views[index]);
    
        location.hash = newHash;
    }
    
    // Add Change Hash Event to Links
    addEventsToLinks = () => {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                this.changeHash(parseInt(e.target.dataset.index));
            })
        })
    }
    
    // Add Eventlister for Hash Change to change view
    
    addHashChangeListener = () => {
        window.addEventListener('hashchange', (e) => {
            let hash = location.hash;
            let view = hash.slice(1,hash.length);
    
            this.views.showView(view);
        })
    } 
}