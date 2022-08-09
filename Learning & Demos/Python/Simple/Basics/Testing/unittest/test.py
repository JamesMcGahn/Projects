import unittest

from activities import eat, nap


class ActivityTests(unittest.TestCase):
    def test_eat_healthy(self):
        """Eat should have a positive message"""
        self.assertEqual(eat("carrot", is_healthy=True), "carrot is healthy")

    def test_eat_unhealthy(self):
        """Eat should have a negative message"""
        self.assertEqual(eat("pizza", is_healthy=False), "pizza is unhealthy")

    def test_eat_healthy_bool(self):
        """is_healthy must be a bool"""
        with self.assertRaises(ValueError):
            eat("pizza", "nothing")

    def test_short_nap(self):
        """short nap should be positive msg"""
        self.assertEqual(nap(1), "A nice 1 hour nap")

    def test_long_nap(self):
        """short nap should be negative msg"""
        self.assertEqual(nap(3), "slept too long")


if __name__ == "__main__":
    unittest.main()

# run with -v for description
