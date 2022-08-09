def eat(food, is_healthy):
    if not isinstance(is_healthy, bool):
        raise ValueError("must be a boolean")
    ending = "unhealthy"
    if is_healthy:
        ending = "healthy"
    return f"{food} is {ending}"


def nap(num_hours):
    if num_hours > 2:
        return "slept too long"
    return "A nice 1 hour nap"
