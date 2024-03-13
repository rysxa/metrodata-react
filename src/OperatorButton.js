import { ACTIONS } from "./Calculator";

export default function OperatorButton({ dispatch, operation }) {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
}