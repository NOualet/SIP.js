import { SessionDescriptionHandlerModifier, SessionDescriptionHandlerOptions } from "./session-description-handler";

/**
 * Options for {@link Invitation.accept}.
 * @public
 */
export interface InvitationAcceptOptions {
  /**
   * Modifiers to pass to SessionDescriptionHandler during the initial INVITE transaction.
   */
  sessionDescriptionHandlerModifiers?: Array<SessionDescriptionHandlerModifier>;
  /**
   * Options to pass to SessionDescriptionHandler during the initial INVITE transaction.
   */
  sessionDescriptionHandlerOptions?: SessionDescriptionHandlerOptions;
}
