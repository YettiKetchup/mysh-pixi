import { Entity } from 'mysh';
import { Container } from 'pixijs';

export class PixiEntity extends Entity {
  public get visible(): boolean {
    try {
      return (this.components[0] as Container).visible;
    } catch {
      throw this.notAttachedError();
    }
  }

  public set visible(value: boolean) {
    try {
      (this.components[0] as Container).visible = value;
    } catch {
      throw this.notAttachedError();
    }
  }

  public override onDestroy(): void {
    super.onDestroy();
    try {
      (this.components[0] as Container).destroy();
    } catch {
      throw this.notAttachedError();
    }
  }

  private notAttachedError(): Error {
    return new Error(
      'The entity has not been added to the Node. Create an Entity via ViewBuilder.'
    );
  }
}
