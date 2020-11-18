import { ButtonGroup, Button } from "@material-ui/core";
import "./StarRating.css";

export default function StarRating() {
  return (
    <ButtonGroup
      color="primary"
      aria-label="outlined primary button group"
      size="small"
    >
      <Button>
        <i class="far fa-star"></i>
      </Button>
      <Button>
        <i class="far fa-star"></i>
      </Button>
      <Button>
        <i class="far fa-star"></i>
      </Button>
      <Button>
        <i class="far fa-star"></i>
      </Button>
      <Button>
        <i class="far fa-star"></i>
      </Button>
    </ButtonGroup>
  );
}
