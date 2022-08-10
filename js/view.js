export class View {
    constructor(){
        this.views =  [...document.getElementsByClassName('viewchanger')];
    }

    initiate = () => {
        this.showView(this.getFirstView());
    }

    showView = (viewName) => {
        this.views.forEach(view => {
            let className = this.extractViewName(view);
            if(className !== viewName){
                view.classList.add('hidden');
            } else {
                view.classList.remove('hidden');
            }
        })
        
    }
    
    hideAllViews = () => {
        this.views.forEach(view => {
            view.classList.add('hidden');
        })
    }
    
    extractViewName = (view) => {
        let classes = view.className.split(" ");
        let viewName = classes[1];
    
        return viewName;
    }
    
    getFirstView = () => {
        return this.views[0].className.split(" ")[1];
    }
}