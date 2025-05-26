
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { LogOut, Calendar, Mail, Globe, Star, Trophy, Users } from 'lucide-react';
import AppointmentsManager from '@/components/admin/AppointmentsManager';
import ContactMessagesManager from '@/components/admin/ContactMessagesManager';
import CountriesManager from '@/components/admin/CountriesManager';
import TestimonialsManager from '@/components/admin/TestimonialsManager';
import SuccessStoriesManager from '@/components/admin/SuccessStoriesManager';
import UserRolesManager from '@/components/admin/UserRolesManager';

const Admin = () => {
  const { user, signOut, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('appointments');

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              {isAdmin && (
                <Badge variant="secondary" className="ml-3">
                  Admin
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user?.email}
              </span>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="appointments" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Appointments
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Messages
              </TabsTrigger>
              <TabsTrigger value="countries" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Countries
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Testimonials
              </TabsTrigger>
              <TabsTrigger value="stories" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Success Stories
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Users
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appointments" className="mt-6">
              <AppointmentsManager />
            </TabsContent>

            <TabsContent value="messages" className="mt-6">
              <ContactMessagesManager />
            </TabsContent>

            <TabsContent value="countries" className="mt-6">
              <CountriesManager />
            </TabsContent>

            <TabsContent value="testimonials" className="mt-6">
              <TestimonialsManager />
            </TabsContent>

            <TabsContent value="stories" className="mt-6">
              <SuccessStoriesManager />
            </TabsContent>

            <TabsContent value="users" className="mt-6">
              <UserRolesManager />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
