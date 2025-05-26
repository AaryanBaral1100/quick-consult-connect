
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Plus, Edit, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface SuccessStory {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  client_name: string | null;
  destination_country: string | null;
  is_featured: boolean | null;
  display_order: number | null;
}

const SuccessStoriesManager = () => {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingStory, setEditingStory] = useState<SuccessStory | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    client_name: '',
    destination_country: '',
    is_featured: false,
    display_order: 0,
  });

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('success_stories')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setStories(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch success stories",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingStory) {
        const { error } = await supabase
          .from('success_stories')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingStory.id);

        if (error) throw error;
        toast({ title: "Success", description: "Success story updated successfully" });
      } else {
        const { error } = await supabase
          .from('success_stories')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Success story added successfully" });
      }

      setIsDialogOpen(false);
      setEditingStory(null);
      resetForm();
      fetchStories();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image_url: '',
      client_name: '',
      destination_country: '',
      is_featured: false,
      display_order: 0,
    });
  };

  const handleEdit = (story: SuccessStory) => {
    setEditingStory(story);
    setFormData({
      title: story.title,
      description: story.description,
      image_url: story.image_url || '',
      client_name: story.client_name || '',
      destination_country: story.destination_country || '',
      is_featured: story.is_featured || false,
      display_order: story.display_order || 0,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this success story?')) return;

    try {
      const { error } = await supabase
        .from('success_stories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Success story deleted successfully" });
      fetchStories();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Success Stories Management</CardTitle>
            <CardDescription>
              Manage client success stories and case studies
            </CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => {
                setEditingStory(null);
                resetForm();
              }}>
                <Plus className="w-4 h-4 mr-2" />
                Add Success Story
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingStory ? 'Edit Success Story' : 'Add New Success Story'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    required
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="client_name">Client Name</Label>
                  <Input
                    id="client_name"
                    value={formData.client_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, client_name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="destination_country">Destination Country</Label>
                  <Input
                    id="destination_country"
                    value={formData.destination_country}
                    onChange={(e) => setFormData(prev => ({ ...prev, destination_country: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) }))}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_featured"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                  />
                  <Label htmlFor="is_featured">Featured</Label>
                </div>
                <Button type="submit" className="w-full">
                  {editingStory ? 'Update Success Story' : 'Add Success Story'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stories.map((story) => (
              <TableRow key={story.id}>
                <TableCell className="font-medium">{story.title}</TableCell>
                <TableCell>{story.client_name || 'Not specified'}</TableCell>
                <TableCell>{story.destination_country || 'Not specified'}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    story.is_featured ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {story.is_featured ? 'Featured' : 'Regular'}
                  </span>
                </TableCell>
                <TableCell>{story.display_order}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(story)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(story.id)}
                      className="text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {stories.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No success stories found
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SuccessStoriesManager;
