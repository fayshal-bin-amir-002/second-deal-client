import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { IListingItem } from "@/types";
import Image from "next/image";

interface IViewListItem {
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  data: IListingItem;
}

const ViewListItem = ({ modalOpen, setModalOpen, data }: IViewListItem) => {
  return (
    <Dialog onOpenChange={setModalOpen} open={modalOpen}>
      <DialogContent className="max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Product details</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <div>
            <h4 className="font-semibold">Product Title</h4>
            <p className="text-gray-600 text-sm">{data?.title}</p>
          </div>
          <div>
            <h4 className="font-semibold">Price</h4>
            <p className="text-gray-600 text-sm">{data?.price}$</p>
          </div>
          <div>
            <h4 className="font-semibold">Condition</h4>
            <p className="text-gray-600 text-sm">{data?.condition}</p>
          </div>
          <div>
            <h4 className="font-semibold">Category</h4>
            <p className="text-gray-600 text-sm">{data?.category?.name}</p>
          </div>
          <div>
            <h4 className="font-semibold">Description</h4>
            <p className="text-gray-600 text-sm">{data?.description}</p>
          </div>
          <div>
            <h4 className="font-semibold">Status</h4>
            <p className="text-gray-600 text-sm">{data?.status}</p>
          </div>
          <div>
            <h4 className="font-semibold">Post Date</h4>
            <p className="text-gray-600 text-sm">
              {new Date(data?.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Images</h4>
            <div className="grid grid-cols-3 gap-2">
              {data?.images?.map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt="product-image"
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-2" />
        <DialogHeader>
          <DialogTitle>User details</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <div>
            <h4 className="font-semibold">Name</h4>
            <p className="text-gray-600 text-sm">{data?.userId.name}</p>
          </div>
          <div>
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-600 text-sm">{data?.userId?.email}</p>
          </div>
          <div>
            <h4 className="font-semibold">Phone Number</h4>
            <p className="text-gray-600 text-sm">{data?.userId?.phoneNumber}</p>
          </div>
          <div>
            <h4 className="font-semibold">Location</h4>
            <p className="text-gray-600 text-sm">{data?.userId.location}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewListItem;
