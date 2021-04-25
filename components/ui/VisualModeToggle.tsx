import { useVisualModeDispatch, useVisualModeValue, VisualMode } from "./Theme";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function VisualModeToggle() {
    const visualMode = useVisualModeValue();
    const setVisualMode = useVisualModeDispatch();

    function switchMode() {
        switch (visualMode) {
            case VisualMode.LIGHT:
                setVisualMode(VisualMode.DARK);
                break;
            case VisualMode.DARK:
                setVisualMode(VisualMode.LIGHT);
                break;
            default:
                throw new Error(`Invalid visual mode ${visualMode}`);
        }
    }

    return (
        <Button
            onClick={switchMode}
            aria-label={
                visualMode === VisualMode.LIGHT
                    ? "Turn on Dark Mode"
                    : "Turn on Light Mode"
            }
        >
            <FontAwesomeIcon
                icon={visualMode === VisualMode.LIGHT ? faSun : faMoon}
                fixedWidth
            />
        </Button>
    );
}
