import { Stage } from 'mysh';
import { Application, Container } from 'pixijs';
import { Root } from './decorators/stage.decorators';
import { RootFactory } from './data/types';

@Root(() => new Container())
export abstract class PixiStage extends Stage {
  constructor(protected app: Application) {
    super();
  }

  public abstract preload(): Promise<void>;

  public init(): void {
    super.init();

    const { root } = this as unknown as Stage & {
      root: RootFactory;
    };

    this.app.stage = root();
    this.app.stage.x = this.app.view.width / 2;
    this.app.stage.y = this.app.view.height / 2;
  }

  public destroy(): void {
    super.destroy();

    this.app.stage.destroy();
    this.app.stage = new Container();
  }
}
