class LoginView extends eui.Component implements  eui.UIComponent, RES.PromiseTaskReporter {
	
	private loadingBar: eui.ProgressBar;
	private title: eui.Image;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.loadingBar.minimum = 0;
	}

	public onProgress(current: number, total: number): void {
		this.loadingBar.maximum = total;
		this.loadingBar.value = current;
    }	
}