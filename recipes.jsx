import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// ---------------- RECIPE SCREEN ----------------
export function RecipeScreen() {
  const recipe = {
    title: "Omelette",
    ingredients: "Eggs, Cheese, Bell pepper, Onion, Spinach",
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1604908177093-efb7b2b4df59?auto=format&fit=crop&w=800&q=80",
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Recommended</h1>
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-xl w-full h-44 object-cover"
          />
          <p className="text-sm text-gray-700">
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Category:</strong> {recipe.category}
          </p>
          <Button className="w-full">Save</Button>
        </CardContent>
      </Card>
    </div>
  )
}

// ---------------- COMMUNITY SCREEN ----------------
export function CommunityScreen() {
  const sharedItem = {
    name: "Milk",
    expiry: "April 24",
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Community</h1>
      <Card className="rounded-2xl shadow-md">
        <CardContent className="flex flex-col items-center p-6 space-y-2">
          <MapPin className="w-10 h-10 text-green-600" />
          <p className="text-lg font-semibold">{sharedItem.name}</p>
          <p className="text-sm text-gray-500">Expires: {sharedItem.expiry}</p>
          <Button className="w-full mt-2">Share</Button>
        </CardContent>
      </Card>
    </div>
  )
}
