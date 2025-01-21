import CartRow, { RowPropType } from "@/Components/CartRow/CartRow";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";

export default function Cart(): JSX.Element {
    const images: RowPropType[] = [
        {
            index: 1,
            image: "/images/Monitor-Cart.svg",
            product: "LCD Monitor",
            price: 650,
            subtotal: 600,
        },
        {
            index: 2,
            image: "/images/wishlist7.svg",
            product: "H1 Gamepad",
            price: 650,
            subtotal: 600,
        },
    ];
    return (
        <div className=" w-full mx-auto md:px-12">
            <div className="p-7">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Cart</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Table section */}
            <div className="p-6">
                <div className="overflow-y-scroll md:h-3/5">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="text-Button tracking-tight">
                            <tr>
                                {["#", "Product", "Price", "Quantity", "Subtotal"].map(
                                    (header, index) => (
                                        <th
                                            key={index}
                                            className="py-4 px-4 text-left border-b-2 border-gray-300 pb-3"
                                        >
                                            {header}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {images.map((product, index) => (
                                <CartRow key={index} {...product} />
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="flex justify-between py-4">
                    <Button
                        className="p-6 px-9 rounded-none bg-transparent text-Button"
                        variant={"outline"}
                    >
                        Return To Shop
                    </Button>
                    <Button
                        className="p-6 px-9 rounded-none bg-transparent text-Button"
                        variant={"outline"}
                    >
                        Update Cart
                    </Button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-[173px] p-6">
                <div className="flex justify-between gap-2 py-4">
                    <div className="md:w-1/2 w-full">
                        <Input
                            type="text"
                            placeholder="Coupon Code"
                            className="p-6 px-9 rounded-none bg-transparent text-Button"
                        />
                    </div>
                    <Button
                        className="p-6 px-9 rounded-none bg-Secondary2 text-Button"
                        variant={"outline"}
                    >
                        Apply Coupon
                    </Button>
                </div>

                <div className="md:w-1/2 w-full">
                    <div className="py-4">
                        <Card className="rounded-none border border-black">
                            <CardHeader>
                                <CardTitle>Card Total</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                                    <p>Subtotal:</p>
                                    <p>$1750</p>
                                </div>
                                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>
                                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                                    <p>Total:</p>
                                    <p>$1750</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button className="p-6 px-9 rounded-none  bg-Secondary2 text-Button"
                                    variant={"outline"}
                                >
                                    Proceed to Checkout

                                </Button>

                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
